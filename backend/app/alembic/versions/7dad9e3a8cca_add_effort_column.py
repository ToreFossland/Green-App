"""add effort column

Revision ID: 7dad9e3a8cca
Revises: af8504c588ff
Create Date: 2021-07-26 04:14:10.896800-07:00

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7dad9e3a8cca'
down_revision = 'af8504c588ff'
branch_labels = None
depends_on = None


def upgrade():
    op.add_column("performsActivities", sa.Column(
        "effort", sa.Integer, nullable=True))
    pass


def downgrade():
    pass
