import Phaser from 'phaser';

export class Background extends Phaser.GameObjects.TileSprite {
    constructor(scene, x, y, width, height, texture) {
        super(scene, x, y, width, height, texture);
        this.setOrigin(0);
        this.setScrollFactor(0, 0);
        this.setScale(4);
    }

    update(args) {
        this.setTilePosition(this.scene.cameras.main.scrollX * 0.05);
    }
}
