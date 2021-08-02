"""create challenges table

Revision ID: 6d1b9ed16db8
Revises: 7dad9e3a8cca
Create Date: 2021-07-28 04:35:01.114797-07:00

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6d1b9ed16db8'
down_revision = '7dad9e3a8cca'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        "challenge",
        sa.Column("id", sa.Integer, primary_key=True),
        sa.Column("name", sa.String(50), nullable=False),
        sa.Column("description", sa.String(400), nullable=True),
        sa.Column("points", sa.Integer),
        sa.Column("activity_id", sa.String(50)
                  ))
    pass


def downgrade():
    op.drop_table("challenge")
    pass
