import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkSimpleXlFillIcon = (
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
      <path d='M0 18c0-4.125 3.328-7.5 7.5-7.5h3c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-3a4.501 4.501 0 0 0 0 9h3c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-3A7.46 7.46 0 0 1 0 18m27 0c0 4.172-3.375 7.5-7.5 7.5h-3A1.48 1.48 0 0 1 15 24c0-.797.656-1.5 1.5-1.5h3a4.501 4.501 0 0 0 0-9h-3A1.48 1.48 0 0 1 15 12c0-.797.656-1.5 1.5-1.5h3c4.125 0 7.5 3.375 7.5 7.5M9 16.5h9c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H9A1.48 1.48 0 0 1 7.5 18c0-.797.656-1.5 1.5-1.5' />
    </g>
    <defs>
      <clipPath id='5a687bb8605a1b1a14c34ac41cb6980d__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSimpleXlFillIcon);
export default ForwardRef;
