# Space Invaders Remix

## Overview

The main premise of this project is to learn more about some of the mechanics that make up video games.
Graphics, sprites, controls, AI, design, etc.

This Space Invaders Remix will be similar to the original Space Invaders, with whatever gimmicks I can come up with. Upgrades, environmental actors, whatever.

## Architecture

I think practicing a traited or mixin system will be a good idea.
For example:

### Example Mixins
Stats Object Mixins
- Upgradeable
- Equippable

Actor Object Mixins
- Moveable
- Destructible
- Controllable
- Collidable

### Example Implementations
Player Ship - Actor, Stats
- Moveable
- Destructible
- Controllable
- Upgradeable
- Collidable

Powerup - Actor, Stats
- Moveable
- Equippable
