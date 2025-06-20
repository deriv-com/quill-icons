import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowsRotateXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.234 15.89a.79.79 0 0 1-.75.61c-.468 0-.843-.375-.75-.844C2.813 11.016 6.984 7.5 12 7.5c3.797 0 7.125 2.063 9 5.11V9.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75v4.5c0 .422-.375.75-.75.75h-4.5a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h2.531C18.234 10.828 15.328 9 12 9a9.01 9.01 0 0 0-8.766 6.89m17.485 4.266c.093-.375.422-.656.797-.656.422 0 .797.422.703.89C21.14 25.032 16.969 28.5 12 28.5c-3.844 0-7.172-2.016-9-5.062v2.812a.74.74 0 0 1-.75.75.74.74 0 0 1-.75-.75v-4.5c0-.375.328-.75.75-.75h4.5c.422 0 .75.375.75.75a.74.74 0 0 1-.75.75H4.172C5.719 25.219 8.625 27 12 27c4.219 0 7.781-2.906 8.719-6.844' />
    </g>
    <defs>
      <clipPath id='83aff9590855fb2c9e9b364721ac3b1d__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowsRotateXlRegularIcon);
export default ForwardRef;
