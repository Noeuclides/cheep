class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :username, null: false, default: 'bot'
      t.string :body, null: false
      t.integer :likes_count, null: false, default: 0
      t.integer :repost_count, null: false, default: 0

      t.timestamps
    end
  end
end
