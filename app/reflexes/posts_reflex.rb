# frozen_string_literal: true

class PostsReflex < ApplicationReflex

  def repost
    @new_var = "Nuevo"
    post = Post.find(element.dataset[:id])
    post.increment! :repost_count
    cable_ready['timeline'].text_content(
      selector: "#post-#{post.id}-reposts",
      text: post.repost_count
    )
    cable_ready.broadcast
  end

  def like
    post = Post.find(element.dataset[:id])
    post.increment! :likes_count
    cable_ready['timeline'].text_content(
      selector: "#post-#{post.id}-likes",
      text: post.likes_count
    )
    cable_ready.broadcast
  end
end
