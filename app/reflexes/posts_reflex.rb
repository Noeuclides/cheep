# frozen_string_literal: true

class PostsReflex < ApplicationReflex
  def repost
    post = Post.find(element.dataset[:id])
    post.increment! :repost_count
  end

  def like
    post = Post.find(element.dataset[:id])
    post.increment! :likes_count
  end
end
