<template>
  <div>
    <main>
      <div class="grid">
        <div class="profile">
          <img src="https://avatars.githubusercontent.com/u/52468589?v=4" alt="">
          <div class="profile-text">
            <h1>Daniel Rubens</h1>
            <p>Front End and UI Designer</p>
          </div>
        </div>
        <div>
          <div class="info">
            <div class="tab">
              <h2 @click="activeTab = 'repos'; activeLine = 'repos'"
                :style="{ fontWeight: activeTab === 'repos' ? 'bold' : 'normal' }"
                :class="{ 'active-line': activeLine === 'repos' }">Repos <span>73</span></h2>
              <h2 @click="activeTab = 'starred'; activeLine = 'starred'"
                :style="{ fontWeight: activeTab === 'starred' ? 'bold' : 'normal' }"
                :class="{ 'active-line': activeLine === 'starred' }">Starred <span>5</span></h2>

            </div>
            <div class="tab-responsive">
              <div class="tab-responsive-item">
                <h2 @click="activeTab = 'repos'; activeLine = 'repos'"
                  :style="{ fontWeight: activeTab === 'repos' ? 'bold' : 'normal' }"
                  :class="{ 'active-line': activeLine === 'repos' }">Repos <span>13</span></h2>
              </div>
              <div class="tab-responsive-item">
                <h2 @click="activeTab = 'starred'; activeLine = 'starred'"
                  :style="{ fontWeight: activeTab === 'starred' ? 'bold' : 'normal' }"
                  :class="{ 'active-line': activeLine === 'starred' }">Starred <span>2</span></h2>
              </div>
            </div>
            <div class="input-icon">
              <Search />
              <input type="text" placeholder="Filter by name">
            </div>
            <div v-if="activeTab === 'repos'">
              <div class="info-user">
                <h3>nodejs / Release</h3>
                <p>Node.js Foundation Release Workin Group</p>
                <div class="description">
                  <Star /><span>1,00 </span>
                  <Fork /><span>1,404 </span>
                </div>
              </div>
              <div class="info-user">
                <h3>nodejs / Release</h3>
                <p>Node.js Foundation Release Workin Group</p>
                <div class="description">
                  <Star /><span>1,00 </span>
                  <Fork /><span>1,404 </span>
                </div>
              </div>
            </div>
            <div class="info-user" v-if="activeTab === 'starred'">
              <h3>nodejsdddd / Release</h3>
              <p>Node.js Foundation Release Workin Group</p>
              <div class="description">
                <Star /><span>1,00 </span>
                <Fork /><span>1,404 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.grid {
  @include md {
    grid-template-columns: 1fr;

  }

  display: grid;
  grid-template-columns: 0.2fr 1.4fr;
  grid-template-rows: 1fr;
  gap: 0px 6rem;
  padding: 3rem 0rem 3rem 2rem;

  @include sm {
    grid-template-columns: 1fr;
    padding: 3rem 0;
  }

  img {
    width: auto;
    height: 16rem;
    border-radius: 50%;

    @include sm {
      height: 7rem;
    }

    @include md {
      height: 10rem;
    }

  }

  .profile {
    @include sm {
      display: grid;
      grid-template-columns: 0.1fr 1fr;
      gap: 1rem;
      padding: 0 1rem;
    }

    @include md {
      display: grid;
      grid-template-columns: 0.1fr 1fr;
      gap: 1rem;
      padding: 0;
    }

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .profile-text {
      @include sm {
        text-align: start;
        line-height: 1.3;
      }

      @include md {
        text-align: start;
      }

      text-align: center;
      margin-top: 1rem;
      line-height: 1.5;

      h1 {
        font-size: $font-24;
        color: $black;
      }

      p {
        color: $slate-grey-two;
      }
    }
  }

  .info {
    .tab {
      @include sm {
        display: none;
      }

      @include md {
        padding: 3rem 0 1rem;
      }

      border-bottom: .18rem solid $pale-grey;
      padding: 1rem 0 1rem 4rem;
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 3.1rem;

      h2 {
        font-size: $font-18;
        color: $slate-grey;
        font-weight: normal;
        cursor: pointer;
      }

      span {
        font-weight: bold;
        color: $slate-grey;
        background: $white-two;
        padding: 0.2rem 0.6rem;
        border-radius: 5rem;
      }

      .active-line {
        position: relative;

        &:after {
          content: '';
          position: absolute;
          bottom: -1.1rem;
          left: -1rem;
          width: 130%;
          height: 0.188rem;
          background-color: $rusty-orange;
        }
      }
    }

    .tab-responsive {
      @include md {
        display: none;
      }

      @include lg {
        display: none;
      }

      border-bottom: .18rem solid $pale-grey;
      padding: 4.5rem 0 1.5rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      justify-items: center;
      align-items: center;

      .active-line {
        position: relative;

        &:after {
          content: '';
          position: absolute;
          bottom: -1.1rem;
          left: 0rem;
          width: 100%;
          height: 0.188rem;
          background-color: $rusty-orange;
        }
      }

      .tab-responsive-item {

        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0 1rem;

        h2 {
          font-size: $font-18;
          color: $slate-grey;
          font-weight: normal;
        }

        span {
          font-weight: bold;
          color: $slate-grey;
          background: $white-two;
          padding: 0.2rem 0.6rem;
          border-radius: 5rem;
          font-size:0.875rem;
        }
      }
    }

    .input-icon {
      @include md {
        padding: 0;
      }

      position: relative;
      margin: 2.5rem 0 1rem 0;
      padding: 0 1rem;

      .icon {
        @include sm {
          left: 1.5rem;
        }

        @include md {
          left: .30rem;
        }

        position: absolute;
        left: 1.5rem;
        top: 50%;
        transform: translateY(-50%);
      }

      svg {
        color: $gray;
      }
    }

    input {
      border: .11rem solid $gray;
      padding: .99rem 0 0.5rem 3rem;
      width: 40%;
      border-radius: .30rem;
      color: $gray;

      @include sm {
        width: 100%;
      }

      &::placeholder {
        color: $gray;
      }
    }

    .info-user {
    
      @include sm {
        padding: 1rem 1rem;
      }

      padding: 1rem 0;

      h3 {
        color: $blue;
        font-weight: normal;
        font-size: $font-18;
      }

      p {
        font-size: 14px;
        padding: 1rem 0;
        color: $slate-grey-two;
      }

      .description {
        font-size: 14px;
        color: $slate-grey-two;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border-bottom: .11rem solid $pale-grey;
        padding: 0 0 1.5rem;
        span{
        
          &:first-of-type{
            padding-right: 1rem;
          }
        }
        
      }
    }
  }
}
</style>

<script setup>
import Star from './icons/Star.vue';
import Fork from './icons/Fork.vue';
import Search from './icons/Search.vue';

import { ref } from 'vue';

const activeTab = ref('repos');
const activeLine = ref('repos');

</script>
