# Cinematic Prototype

## Cinematics Prototype Requirements

### Non-interactive cinematic 
Current prototype contains a logo which says 'Final Proj Studio' under a scene that says `NonInteractive`. There is a beginning showing the fade in transitoin, the middle which shows an animation, and the end which faces out into the title screen. 

### Interactive cinematic
The interactive cinematic falls in the `Title` scene in the source code. In this scene, there is an event listener which gets the mouse coordinates of the window, and add the spritesheet of the main character into the game(one idle and one running). The image object is offset by 100 and follows the cursor along the x axis. When the cursor is not moving, the idle animation of the main character plays. When it it moving, then the running animation plays, thus satisfying the responsive and visually alive requirements. 
        
### Choreography in code 
The non-interactive cinematic section of this prototype is implemented using tween chaining, thus satisfying this requirement.

Credit for scenes 'Title' to 'Level13' go to [Brayden Smith](https://github.com/bsmit104/sceneflowproto)
link: https://redinjapanese.github.io/120fincinematic/ 
