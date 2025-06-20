import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFiveCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 4.625c-1.758 0-3.352.938-4.242 2.438a4.89 4.89 0 0 0 0 4.875A4.88 4.88 0 0 0 6 14.375a4.87 4.87 0 0 0 4.219-2.437 4.89 4.89 0 0 0 0-4.876C9.329 5.563 7.734 4.626 6 4.626M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3m-1.125-9h2.438a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562h-1.97l-.187 1.008 1.43.164c.937.117 1.664.914 1.664 1.851a1.88 1.88 0 0 1-1.875 1.875h-.844a1.92 1.92 0 0 1-1.593-.867l-.094-.14a.54.54 0 0 1 .14-.774.54.54 0 0 1 .774.14l.117.141c.14.235.398.352.656.352h.844c.422 0 .75-.328.75-.727a.735.735 0 0 0-.656-.726l-2.04-.235a.52.52 0 0 1-.398-.21.6.6 0 0 1-.093-.446l.374-2.062a.58.58 0 0 1 .563-.469' />
    </g>
    <defs>
      <clipPath id='c544559914361e2b6e51dadab1e442df__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFiveCaptionBoldIcon);
export default ForwardRef;
