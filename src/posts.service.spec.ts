import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    // реализуйте тест-кейс
    const createPost = postsService.create(post);
    expect(createPost).toHaveProperty('id');
    expect(createPost).toHaveProperty('date');
    expect(createPost.text).toBe(post.text);
  });

  it('should find a post', () => {
    // реализуйте тест-кейс
    const createPost = postsService.create(post);
    const foundPost = postsService.find(createPost.id);
    expect(foundPost).toEqual(createPost);
  });
});