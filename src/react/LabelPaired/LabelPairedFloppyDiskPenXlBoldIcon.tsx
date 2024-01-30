import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskPenXlBoldIcon = (
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
      <path d='M2.25 10.5v15q.046.704.75.75h9.703l-.562 2.25H3q-1.266-.047-2.11-.89-.843-.844-.89-2.11v-15q.047-1.266.89-2.11.844-.843 2.11-.89h11.531q1.22 0 2.11.89l3.468 3.47-1.593 1.593-3.47-3.469L15 9.938v4.687q-.093 1.032-1.125 1.125h-9q-1.03-.093-1.125-1.125V9.75H3q-.703.047-.75.75m17.86 1.36q.89.89.89 2.156v3.047l-2.25 2.25v-5.297a.77.77 0 0 0-.234-.563zM6 9.75v3.75h6.75V9.75zM7.5 21q.047-1.687 1.5-2.578 1.5-.844 3 0 1.453.89 1.5 2.578-.047 1.687-1.5 2.578-1.5.845-3 0-1.453-.89-1.5-2.578m18.281-3.937.657.656q.562.609.562 1.312 0 .75-.562 1.36l-1.36 1.359-3.328-3.328 1.36-1.36q.609-.562 1.312-.562.75 0 1.36.563m-11.156 8.484 6.047-6.047L24 22.828l-6.047 6.047a1.8 1.8 0 0 1-.703.422L14.438 30a.82.82 0 0 1-.704-.234.82.82 0 0 1-.234-.703l.703-2.813q.141-.422.422-.703' />
    </g>
    <defs>
      <clipPath id='ccf07ea3cb7577e0842e921af96dbb74__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskPenXlBoldIcon);
export default ForwardRef;
