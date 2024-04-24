import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardXlRegularIcon = (
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
      <path d='M1.734 18 12 25.453v-14.86zm10.36-9c.75 0 1.406.656 1.406 1.406v4.875l8.25-6q.352-.28.844-.281c.75 0 1.406.656 1.406 1.406v15.188A1.41 1.41 0 0 1 22.594 27c-.328 0-.61-.094-.844-.234l-8.25-6v4.828A1.41 1.41 0 0 1 12.094 27c-.328 0-.61-.094-.844-.234L.422 18.938A1.18 1.18 0 0 1 0 18c0-.328.14-.656.422-.89L11.25 9.28q.351-.28.844-.281m1.406 9.938 9 6.515v-14.86l-9 6.516z' />
    </g>
    <defs>
      <clipPath id='92980c05d77a63b664fe3262fc40f482__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardXlRegularIcon);
export default ForwardRef;
