# frozen_string_literal: true

class ExampleReflex < ApplicationReflex
  def get_post
  end

  def search(comment)
    Post.create!(body: comment)
    @all_posts = Post.all
  end

end
