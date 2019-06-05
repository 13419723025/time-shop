import {get ,post }from '../utils/request'


export function getComingSoon(){
    return post('/api/v2/proxy', {
        url: 'https://api-m.mtime.cn/Movie/MovieComingNew.api?locationId=290',
      });
    
}

export function getDetail(id){
    return post('/api/v2/proxy', {
    url:
      'https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=' +
      id,
  });
}