import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyAnnouncementIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path
        fillRule='evenodd'
        d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.976 10.423a1.346 1.346 0 0 1-1.301-.971c.747.1 1.608.23 2.41.392a1.35 1.35 0 0 1-1.11.579M11.219 3.5c-.423 0-.781.327-.781.729v.32c-.405.39-1.377 1.054-3 1.529-1.116.328-3.063.515-3.418.546-.018-.023-.031-.046-.054-.067a.56.56 0 0 0-.394-.157.545.545 0 0 0-.557.526L3 9.105a.52.52 0 0 0 .162.38.57.57 0 0 0 .394.166h.003a.58.58 0 0 0 .394-.162c.03.269.12.527.269.765.273.436.707.742 1.224.867q.242.058.49.058c.812 0 1.509-.465 1.816-1.16 1.432.467 2.28 1.07 2.685 1.432v.32c0 .402.359.729.782.729.422 0 .78-.327.78-.728V4.229c0-.402-.358-.73-.78-.73'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='2c163f5a26a04349797fb950d7cb3dfc__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyAnnouncementIcon);
export default ForwardRef;
