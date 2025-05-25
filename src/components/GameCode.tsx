
import React from 'react';

const GameCode = () => {
  const codeContributions = [
    {
      name: "Hujaifa Khan",
      title: "Game Initialization & Asset Management",
      code: `import math
import random
import os
import pygame
from pygame import mixer
from datetime import datetime
import openpyxl
from openpyxl import load_workbook
import atexit

# =================================================================
#                         INITIALIZATION
# =================================================================

pygame.mixer.pre_init(44100, -16, 2, 512)
pygame.init()
FPS = 60
clock = pygame.time.Clock()

# --- Screen Setup ---
SCREEN_WIDTH, SCREEN_HEIGHT = 1100, 850
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("Space Invaders: Final Frontier")

# --- Asset Paths ---
ASSET_PATH = r"D:\\Ufo enemy kill\\assets"

# --- Load Assets ---
try:
    original_bg = pygame.image.load(os.path.join(ASSET_PATH, 'background.png'))
    background_img = pygame.transform.scale(original_bg, (SCREEN_WIDTH, SCREEN_HEIGHT))
    
    icon_img = pygame.image.load(os.path.join(ASSET_PATH, 'ufo.png'))
    pygame.display.set_icon(icon_img)
    player_img = pygame.image.load(os.path.join(ASSET_PATH, 'player.png'))
    enemy_img = pygame.image.load(os.path.join(ASSET_PATH, 'enemy.png'))
    bullet_img = pygame.image.load(os.path.join(ASSET_PATH, 'bullet.png'))

    # Dictionary to hold all music choices
    music_options = {
        "Sound 1 (Default)": os.path.join(ASSET_PATH, 'background_music.wav'),
        "Sound 2 (SLAVA!)":r"C:\\Users\\DEATHWisH\\Downloads\\Music\\background_music3.mp3",
        "Sound 3 (One Kiss)": r"C:\\Users\\DEATHWisH\\Downloads\\Music\\background_music2.mp3"
    }
    # Initial music selection
    selected_music_key = "Sound 1 (Default)"
    
    # Load default music initially to avoid errors
    mixer.music.load(music_options[selected_music_key])
    mixer.music.set_volume(0.3)
    bullet_sound = mixer.Sound(os.path.join(ASSET_PATH, 'laser.wav'))
    explosion_sound = mixer.Sound(os.path.join(ASSET_PATH, 'explosion.wav'))

except pygame.error as e:
    print(f"FATAL ERROR: Asset loading failed. Ensure paths are correct. Details: {e}")
    exit()
except Exception as e:
    print(f"FATAL ERROR: A music file might be missing or the path is incorrect. Details: {e}")
    exit()`
    },
    {
      name: "Abir Islam",
      title: "Font Management & UI Elements",
      code: `try:
    emoji_font = pygame.font.Font("C:/Windows/Fonts/seguiemj.ttf", 30)
except FileNotFoundError:
    emoji_font = pygame.font.Font(None, 40)
score_font = pygame.font.Font(None, 32)
game_over_font = pygame.font.Font(None, 64)
info_font = pygame.font.Font(None, 24)
input_font = pygame.font.Font(None, 40)
title_font = pygame.font.Font(None, 80)
danger_font = pygame.font.Font(None, 40)
arrow_font = pygame.font.Font(None, 50)

# --- Colors & UI Elements ---
WHITE, BLACK = (255, 255, 255), (0, 0, 0)
GREEN, RED, BLUE = (0, 200, 0), (200, 0, 0), (50, 50, 200)
GOLD = (255, 215, 0)
quit_button_rect = pygame.Rect(SCREEN_WIDTH - 110, SCREEN_HEIGHT - 50, 100, 40)
pause_button_rect = pygame.Rect(SCREEN_WIDTH - 60, 5, 50, 35)

# =================================================================
#                       GAME STATE VARIABLES
# =================================================================
player_x_change, player_y_change = 0, 0
current_sensitivity_level = 3
sensitivity_map = {1: 3, 2: 4, 3: 6, 4: 8, 5: 11}
player_rect = player_img.get_rect()
bullet_rect = bullet_img.get_rect()

user_name, user_gender = "", ""
score_value, lives = 0, 3
bullet_state, is_paused, sound_enabled = "ready", False, True
game_session_active = False
enemies, danger_level, enemy_base_speed = [], 1, 3.5`
    },
    {
      name: "Nahiyan Pial",
      title: "Data Management & Excel Integration",
      code: `def save_to_excel(outcome):
    if not user_name: return # Do not save if no user is set
    filename = "Ufo Game.xlsx"
    headers = ["Player Name", "Gender", "Final Score", "Danger Level", "Game Outcome", "Timestamp"]
    try:
        workbook = load_workbook(filename) if os.path.exists(filename) else openpyxl.Workbook()
        sheet = workbook.active
        if sheet.max_row == 0 or (sheet.max_row == 1 and sheet.cell(1,1).value is None):
            sheet.title = "Game Report"; sheet.append(headers)
        data_row = [user_name, user_gender, score_value, danger_level, outcome, datetime.now().strftime("%Y-%m-%d %H:%M:%S")]
        sheet.append(data_row)
        for col in sheet.columns:
            max_length = 0; column_letter = col[0].column_letter
            for cell in col:
                if cell.value and len(str(cell.value)) > max_length: max_length = len(str(cell.value))
            sheet.column_dimensions[column_letter].width = max_length + 2
        workbook.save(filename)
        print(f"Game data saved to '{filename}'")
    except Exception as e:
        print(f"Error saving to Excel: {e}")

def save_on_exit():
    if game_session_active: save_to_excel("Terminated")
atexit.register(save_on_exit)`
    },
    {
      name: "Triloy Chakma",
      title: "Game Logic & Enemy AI",
      code: `def reset_game_state():
    global player_x_change, player_y_change, score_value, lives, bullet_state, enemies, danger_level
    player_rect.centerx, player_rect.bottom = SCREEN_WIDTH // 2, SCREEN_HEIGHT - 60
    player_x_change, player_y_change = 0, 0
    score_value, lives, danger_level = 0, 3, 1
    bullet_state = "ready"
    enemies = [create_enemy() for _ in range(8)]

def create_enemy():
    rect = enemy_img.get_rect(x=random.randint(0, SCREEN_WIDTH - 64), y=random.randint(50, 200))
    return {"rect": rect, "x_speed": random.choice([-1, 1]), "behavior": "normal"}

def play_sound(sound):
    if sound_enabled: sound.play()

def get_high_score():
    filename = "Ufo Game.xlsx"
    high_score, high_scorer = 0, "N/A"
    if not os.path.exists(filename): return high_score, high_scorer
    try:
        workbook = load_workbook(filename)
        sheet = workbook.active
        for row in sheet.iter_rows(min_row=2, values_only=True):
            if row[2] is not None and isinstance(row[2], (int, float)) and row[2] > high_score:
                high_score, high_scorer = row[2], row[0]
    except Exception: pass
    return high_score, high_scorer`
    },
    {
      name: "Saif Siam",
      title: "UI/UX Design & Music Selector",
      code: `def home_screen():
    global user_name, user_gender, current_sensitivity_level, sound_enabled, selected_music_key
    
    high_score, high_scorer = get_high_score()
    name_active = False

    # ### MODIFIED SECTION: UI Elements re-aligned and new music selector created ###
    # Player Info Area
    name_box = pygame.Rect(SCREEN_WIDTH/2 - 200, 280, 400, 50)
    male_box = pygame.Rect(SCREEN_WIDTH/2 - 200, 345, 190, 45)
    female_box = pygame.Rect(SCREEN_WIDTH/2 + 10, 345, 190, 45)
    start_box = pygame.Rect(SCREEN_WIDTH/2 - 150, 410, 300, 55)
    
    # Cleaned up Central Settings Area
    settings_y_start = 520
    sensitivity_slider = pygame.Rect(SCREEN_WIDTH/2 - 150, settings_y_start + 40, 300, 25)
    sound_toggle_box = pygame.Rect(SCREEN_WIDTH/2 - 150, settings_y_start + 110, 300, 40)
    quit_box = pygame.Rect(SCREEN_WIDTH/2 - 150, settings_y_start + 170, 300, 45)

    # NEW: Left-Side Music Selector
    music_keys = list(music_options.keys())
    music_panel_x, music_panel_y = 75, 450
    music_display_box = pygame.Rect(music_panel_x, music_panel_y, 250, 50)
    up_arrow_box = pygame.Rect(music_panel_x + 100, music_panel_y - 40, 50, 40)
    down_arrow_box = pygame.Rect(music_panel_x + 100, music_panel_y + 50, 50, 40)`
    },
    {
      name: "Hujaifa Khan",
      title: "Main Game Loop & Core Mechanics",
      code: `def game_loop():
    global player_x_change, player_y_change, bullet_state, score_value, lives, danger_level, is_paused, game_session_active
    
    reset_game_state()
    game_session_active = True
    
    if sound_enabled:
        try:
            mixer.music.load(music_options[selected_music_key])
            mixer.music.play(-1)
        except pygame.error as e:
            print(f"Error: Could not play selected music '{selected_music_key}'. Playing silence. Details: {e}")

    difficulty_timer = pygame.time.get_ticks()
    dive_timer = pygame.time.get_ticks()

    running = True
    while running:
        if is_paused: pause_screen()

        screen.blit(background_img, (0, 0))

        if pygame.time.get_ticks() - difficulty_timer > 30000:
            danger_level += 1; difficulty_timer = pygame.time.get_ticks()
        if pygame.time.get_ticks() - dive_timer > 5000:
            if enemies:
                random_enemy = random.choice(enemies)
                if random_enemy['behavior'] == 'normal': random_enemy['behavior'] = 'diving'
            dive_timer = pygame.time.get_ticks()

        player_speed = sensitivity_map[current_sensitivity_level]
        for event in pygame.event.get():
            if event.type == pygame.QUIT: pygame.quit(); exit()
            if event.type == pygame.MOUSEBUTTONDOWN:
                if quit_button_rect.collidepoint(event.pos): save_to_excel("Quit"); running = False
                if pause_button_rect.collidepoint(event.pos): is_paused = True
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_p: is_paused = True
                if event.key in (pygame.K_LEFT, pygame.K_a): player_x_change = -player_speed
                if event.key in (pygame.K_RIGHT, pygame.K_d): player_x_change = player_speed
                if event.key in (pygame.K_UP, pygame.K_w): player_y_change = -player_speed
                if event.key in (pygame.K_DOWN, pygame.K_s): player_y_change = player_speed
                if event.key == pygame.K_SPACE and bullet_state == "ready":
                    play_sound(bullet_sound); bullet_state = "fire"; bullet_rect.center = player_rect.center`
    }
  ];

  return (
    <div className="pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6 tracking-wider">
            Game <span className="text-cyan-400">Code</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the technical contributions from each team member
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {codeContributions.map((contribution, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-cyan-500/30 overflow-hidden hover:border-cyan-400/60 transition-all duration-300"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-6 py-4 border-b border-cyan-500/30">
                <h3 className="text-xl font-bold text-cyan-400 mb-1">
                  {contribution.name}
                </h3>
                <p className="text-gray-300 text-sm">
                  {contribution.title}
                </p>
              </div>

              {/* Code Block */}
              <div className="p-6">
                <div className="bg-black/50 rounded-lg border border-gray-700 overflow-hidden">
                  <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="ml-4 text-gray-400 text-sm font-mono">
                        main.py
                      </span>
                    </div>
                  </div>
                  <div className="p-4 max-h-96 overflow-y-auto">
                    <pre className="text-sm text-gray-300 font-mono leading-relaxed">
                      <code>{contribution.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameCode;
