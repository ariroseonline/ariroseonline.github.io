class Api::V1::CardsController < ApplicationController
  respond_to :json


  def index
    respond_with Card.all
  end

  private

  def card_params
    params.require(:card).permit(:name, :body, :image)
  end
end