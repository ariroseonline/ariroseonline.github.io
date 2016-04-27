class CardSerializer < ActiveModel::Serializer
  attributes :id, :name, :body, :image
end
