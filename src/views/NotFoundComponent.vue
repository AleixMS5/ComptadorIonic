<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="secondary">
        <ion-title>Time Fighter</ion-title>
        <ion-buttons slot="primary">
          <ion-button @click="presentAlert" shape="round" color="primary" fill="solid">
            <ion-icon :icon="infoIcon"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header class="ion-no-border ion-padding-top ion-padding-horizontal">
        <ion-grid>
          <ion-row>
            <ion-col>
              <div id="scoreText">Your Score:{{ score }}</div>
            </ion-col>

            <ion-col>
              <div class="ion-text-end"> Time Left: {{ timeleft }}</div>
            </ion-col>
          </ion-row>

        </ion-grid>


      </ion-header>

      <div id="container">

        <ion-button @click="tap" id="tapMeButton" shape="round" color="primary" fill="solid">
          Press me
        </ion-button>
      </div>

    </ion-content>
  </ion-page>
</template>

<script>
import {
  alertController, createAnimation,
  IonButton,
  IonButtons, IonCol,
  IonContent, IonGrid,
  IonHeader,
  IonIcon,
  IonPage, IonRow,
  IonTitle,
  IonToolbar, toastController
} from '@ionic/vue';
import {defineComponent} from 'vue';
import {informationCircle} from 'ionicons/icons'

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonButtons,
    IonIcon, IonGrid, IonCol, IonRow


  },
  setup() {
    return {infoIcon: informationCircle,
      started:false,
    counterInterval:null
    }

  },
  data() {
    return {

      score: 0,
      timeleft: 5

    }

  }, methods: {
    bounce(){
      const animation= createAnimation()
      animation.addElement(document.getElementById('tapMeButton'))
          .duration(1000)
          .fromTo('transform','scale(2.0)','scale(1.0)')
      animation.play();
    },
    bling(){
      const animation= createAnimation()
      animation.addElement(document.getElementById('scoreText'))
          .duration(50)

          .fromTo('opacity','0.0','1.0')
      animation.play();
    },
    async presentAlert() {
      const alert = await alertController.create({
        cssClass: 'my-custom-class',
        header: 'Time fighter',

        subHeader: 'Created by Aleix Montero Sabaté',
        message: 'visit me on: <a href="https://github.com/AleixMS5/ComptadorIonic">https://github.com/AleixMS5/ComptadorIonic</a>',
        buttons: ["ok"],
      });
      await alert.present();


    },
    tap() {
      this.score++
      if(!this.started){
        this.counterInterval = setInterval( ()=>{
        this.timeleft--
      },1000)
        this.started=true
      }
      this.bounce()
      this.bling()


    }, async showResult() {
      const toast = await toastController.create({
        color: 'dark',
        duration: 2000,
        message: 'your score is:'+this.score,
        showCloseButton: true
      });
      await toast.present();
    }
  },watch:{
    // eslint-disable-next-line vue/no-arrow-functions-in-watch
    timeleft: function (newtimeleft){
      if(newtimeleft<=0){
        this.started=false
        this.timeleft=5

        clearInterval(this.counterInterval)
      this.showResult()
        this.score=0

      }
    }
  }
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
