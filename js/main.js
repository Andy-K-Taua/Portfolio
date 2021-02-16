var circle = document.getElementById("circle");
// var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

var rotateValue = circle.style.transform;
var rotateSum;

// upBtn.onclick = function()
// {
//   rotateSum = rotateValue + "rotate(-90deg)"
//   circle.style.transform = rotateSum;
//   rotateValue = rotateSum;
// }
downBtn.onclick = function()
{
  rotateSum = rotateValue + "rotate(90deg)"
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
}

class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
        this.sprites = [];
    }

    preload ()
    {
        this.load.image('particle', 'assets/yellow.png');
    }


    create ()
    {

        for (let i = 0; i < 300; i++)
        {
            const x = Phaser.Math.Between(-200, 2000);
            const y = Phaser.Math.Between(-400, 800);

            const image = this.add.image(x, y, 'particle');


            image.setBlendMode(Phaser.BlendModes.ADD);

            this.sprites.push({ s: image, r: 2 + Math.random() * 6 });
        }
    }

    update ()
    {
        for (let i = 0; i < this.sprites.length; i++)
        {
            const sprite = this.sprites[i].s;

            sprite.y -= this.sprites[i].r;

            if (sprite.y < -256)
            {
                sprite.y = 700;
            }
        }
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 2000,
    height: 1000,
    parent: 'phaser-example',
    scene: [ Example ]


};

const game = new Phaser.Game(config);
