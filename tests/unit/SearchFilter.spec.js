import { shallowMount } from '@vue/test-utils';
import SearchFilter from '@/components/SearchFilter.vue';

describe('SearchFilter.vue', () => {
  let wrapper, data;
  beforeEach(() => {
    data = ['cat', 'dog', 'parrot', 'goldfish', 'horse', 'elephant', 'ant', 'snake', 'crow', 'cow' , 'eagle', 'rhinoceros', 'chimpanzee']
    wrapper = shallowMount(SearchFilter, {
      data: () => {
        return {
          animals: data,
        };
      },
    });
  });

  it('should return all animals when query is empty', () =>{
    const animlasCount = wrapper.findAll('ul > li').length;

    expect(animlasCount).toEqual(data.length);
  });

  it('should return "dog" and "goldfish" when query is "d" ', async () =>{

    const inputElem = wrapper.find('input');
    await inputElem.setValue('d');
    const filteredAnimals = wrapper.findAll('ul > li').wrappers;
    const hasDog = filteredAnimals.some(li => li.text() === 'dog');
    const hasGoldfish = filteredAnimals.some(li => li.text() === 'goldfish');

    expect(hasDog && hasGoldfish).toBe(true)
    expect(filteredAnimals.length).toEqual(2)

  });

  it('should return "cow" and "crow" when query is "ow" ', async () =>{

    const inputElem = wrapper.find('input');
    await inputElem.setValue('ow');
    const filteredAnimals = wrapper.findAll('ul>li').wrappers;
    const hasCow = filteredAnimals.some(li => li.text() === 'cow');
    const hasCrow = filteredAnimals.some(li => li.text() === 'crow');

    expect(hasCow && hasCrow).toBe(true)
    expect(filteredAnimals.length).toEqual(2)

  });

});
