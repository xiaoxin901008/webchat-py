"""empty message

Revision ID: 42ff77c1f762
Revises: 210aa760d3d1
Create Date: 2019-03-11 21:00:25.478697

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '42ff77c1f762'
down_revision = '210aa760d3d1'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('t_friends', sa.Column('friend_id', sa.Integer(), nullable=True))
    op.add_column('t_friends', sa.Column('user_id', sa.Integer(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('t_friends', 'user_id')
    op.drop_column('t_friends', 'friend_id')
    # ### end Alembic commands ###