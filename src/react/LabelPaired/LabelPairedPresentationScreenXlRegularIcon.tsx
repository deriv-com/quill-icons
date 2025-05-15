import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPresentationScreenXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.75 6h25.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H.75A.74.74 0 0 1 0 6.75C0 6.375.328 6 .75 6m.75 3H3v10.5c0 .844.656 1.5 1.5 1.5h18c.797 0 1.5-.656 1.5-1.5V9h1.5v10.5c0 1.688-1.36 3-3 3h-8.25v1.969l4.266 4.265c.28.282.28.797 0 1.078-.282.282-.797.282-1.078 0L13.5 25.829l-3.984 3.985c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079l4.312-4.265V22.5H4.5c-1.687 0-3-1.312-3-3z' />
    </g>
    <defs>
      <clipPath id='4745075ebb4887941d8a5d9fb1aa09a0__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenXlRegularIcon);
export default ForwardRef;
