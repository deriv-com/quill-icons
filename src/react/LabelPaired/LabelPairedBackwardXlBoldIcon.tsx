import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardXlBoldIcon = (
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
      <path d='M13.5 10.406v4.688l8.25-5.813c.234-.187.516-.281.797-.281A1.46 1.46 0 0 1 24 10.453v15.14A1.41 1.41 0 0 1 22.594 27c-.328 0-.61-.047-.844-.234l-8.297-5.813v4.64c0 .798-.61 1.407-1.406 1.407a1.6 1.6 0 0 1-.797-.234L.422 18.938A1.18 1.18 0 0 1 0 18c0-.328.14-.656.422-.89L11.25 9.28q.351-.28.844-.281c.75 0 1.406.656 1.406 1.406m0 7.406v.422L21.75 24V12.047zM3 18l8.25 5.953v-11.86z' />
    </g>
    <defs>
      <clipPath id='3e1284c3d4160962497f3d2c4b398eb4__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardXlBoldIcon);
export default ForwardRef;
