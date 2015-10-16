class CreateImpressions < ActiveRecord::Migration
  def change
    create_table :impressions do |t|

      t.timestamps null: false
    end
  end
end
