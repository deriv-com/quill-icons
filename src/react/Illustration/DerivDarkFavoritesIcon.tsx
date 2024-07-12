import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivDarkFavoritesIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 264 96'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#f223308043197798ed4da68f9491e96f__a)'>
      <path
        fill='#151717'
        d='M256 0H72a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h184a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8'
      />
      <path
        fill='#242828'
        d='M96.5 19h-15a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5'
      />
      <path
        fill='#242828'
        d='M102.5 25h-15a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5M140 24h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8M188 24h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8M244 16h-32a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4V20a4 4 0 0 0-4-4'
      />
      <path
        fill='#6E6E6E'
        d='M248 40H40a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h208a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8'
      />
      <path fill='#6E6E6E' d='M256 40h-56v56h56z' />
      <mask
        id='f223308043197798ed4da68f9491e96f__b'
        width={24}
        height={24}
        x={216}
        y={56}
        maskUnits='userSpaceOnUse'
        style={{
          maskType: 'luminance',
        }}
      >
        <path fill='#fff' d='M240 56h-24v24h24z' />
      </mask>
      <g mask='url(#f223308043197798ed4da68f9491e96f__b)'>
        <path
          fill='#fff'
          d='m238 65.24-7.19-.62L228 58l-2.81 6.63-7.19.61 5.46 4.73-1.64 7.03 6.18-3.73 6.18 3.73-1.63-7.03zm-10 6.16-3.76 2.27 1-4.28-3.32-2.88 4.38-.38 1.7-4.03 1.71 4.04 4.38.38-3.32 2.88 1 4.28z'
        />
      </g>
      <path
        fill='#242828'
        d='M192 40H8a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h184a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8'
      />
      <path
        fill='#323738'
        d='M32.5 59h-15a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5'
      />
      <path
        fill='#323738'
        d='M38.5 65h-15a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5M116 64H52a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8M180 56h-32a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4V60a4 4 0 0 0-4-4'
      />
    </g>
    <defs>
      <clipPath id='f223308043197798ed4da68f9491e96f__a'>
        <path fill='#fff' d='M0 0h264v96H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivDarkFavoritesIcon);
export default ForwardRef;
