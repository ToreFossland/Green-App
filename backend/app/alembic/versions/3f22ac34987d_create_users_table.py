"""create users table

Revision ID: 3f22ac34987d
Revises: 91979b40eb38
Create Date: 2021-07-13 04:44:40.446161-07:00

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3f22ac34987d'
down_revision = '91979b40eb38'
branch_labels = None
depends_on = None


def upgrade():
    op.add_column("user", sa.Column("points", sa.Integer, nullable=True))
    op.add_column("user", sa.Column("company", sa.String(100), nullable=True))
    pass


def downgrade():
    pass
