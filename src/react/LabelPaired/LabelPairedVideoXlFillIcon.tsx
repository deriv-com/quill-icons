import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVideoXlFillIcon = (
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
      <path d='M0 12c0-1.64 1.313-3 3-3h12c1.64 0 3 1.36 3 3v12c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3zm26.203-1.312c.469.28.797.796.797 1.312v12c0 .563-.328 1.078-.797 1.36-.515.234-1.078.234-1.547-.094l-4.5-3-.656-.422v-7.641l.656-.422 4.5-3c.469-.328 1.032-.328 1.547-.094' />
    </g>
    <defs>
      <clipPath id='79b184ac5ac9a9e3a12a5726e7ff640f__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoXlFillIcon);
export default ForwardRef;
