import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import GitUser from '../GitUser.vue';


describe('GitUser', () => {
  it('Renderiza o compomente corretamente', async () => {
    const wrapper = mount(GitUser);
    expect(wrapper.exists()).toBe(true);
  });

  it('Teste da imagem do avatar do usuário corretamente', async () => {
    const username = 'octocat';
    const wrapper = mount(GitUser, {
      props: {
        username,
      },
    });
  
    await wrapper.vm.$nextTick(); 
  
    const avatarImageElement = wrapper.find('img');
    expect(avatarImageElement.exists()).toBe(true); 
  
    const avatarUrl = avatarImageElement.attributes('src'); 
    if (avatarUrl) { 
      expect(avatarUrl).toContain('https'); 
    }
  });

  
  it('Teste de alternância entre abas', async () => {
    const wrapper = mount(GitUser);
  
    expect(wrapper.find('[data-test="repos-tab"]').classes()).toContain('info__tab--active-line');
  
    await wrapper.find('[data-test="starred-tab"]').trigger('click');
  
    expect(wrapper.find('[data-test="repos-tab"]').classes()).not.toContain('info__tab--active-line');
    expect(wrapper.find('[data-test="starred-tab"]').classes()).toContain('info__tab--active-line');
  
    await wrapper.find('[data-test="repos-tab"]').trigger('click');
  
    expect(wrapper.find('[data-test="repos-tab"]').classes()).toContain('info__tab--active-line');
    expect(wrapper.find('[data-test="starred-tab"]').classes()).not.toContain('info__tab--active-line');

  });


});
