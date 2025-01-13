# 1

Point and click games without characters are a great beginner project!

You have one [Autoloaded Global script](https://docs.godotengine.org/en/stable/getting_started/step_by_step/singletons_autoload.html#global-gd) that keeps track of the current game state and all your global variables (like items the player picked up or placed, things the player has unlocked already etc), and then each room (cockpit, hallway, cabinet, etc) is a separate scene (saved as `.tscn` file).

In these scenes you have a background Sprite and [Area2D nodes](https://www.youtube.com/watch?v=cQyyD-ykAHU) with a CollisionShape2D and a Sprite as children. These Area2Ds represent the things the player can interact with in a scene. The `mouse_entered`, `mouse_exited` and the `input_event` [signal](https://docs.godotengine.org/en/stable/getting_started/step_by_step/signals.html) of the Area2D need to be connected to the scene script so you can code what you want to happen when the player interacts with the things in the scene.

Alternatively to Area2Ds you can also use TextureButton nodes for that, which work a bit differently, but already have things like a mouse over state (hover) state build in.

If you want to change a scene (room), you can simply call `get_tree().change_scene("res://filepath/to/your/scene.tscn")`

When you change a scene like that, you will want to set things up for the player in each scene. For example if the player has already picked up a thing like a key, or opened a door. To do this, you simply check the Global game state and relevant Global variables in the `_ready()` of your scene.
