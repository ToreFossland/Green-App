"""create activities table

Revision ID: ec23fe8476e5
Revises: 3f22ac34987d
Create Date: 2021-07-14 02:09:02.449112-07:00

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ec23fe8476e5'
down_revision = '3f22ac34987d'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        "activity",
        sa.Column("id", sa.Integer, primary_key=True),
        sa.Column("name", sa.String(50), nullable=False),
        sa.Column("points", sa.Integer),
    )
    pass


def downgrade():
    pass
