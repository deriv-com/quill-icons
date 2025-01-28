import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPersonChalkboardLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.563 7.688c0 .546.39.937.937.937.508 0 .938-.39.938-.937A.95.95 0 0 0 7.5 6.75a.925.925 0 0 0-.937.938m3.125 0c0 .82-.43 1.523-1.094 1.914-.703.39-1.524.39-2.188 0-.703-.391-1.093-1.094-1.093-1.915 0-.78.39-1.484 1.093-1.875.664-.39 1.485-.39 2.188 0a2.18 2.18 0 0 1 1.094 1.875M6.992 11.75c-.273 0-.508.078-.742.156V18h2.5v-6.25zM6.25 24.875a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V13.43l-1.953 3.633a.64.64 0 0 1-.86.273c-.312-.195-.43-.547-.273-.86L4.22 12.18a3.16 3.16 0 0 1 2.773-1.68H12.5V7.375c0-1.016.82-1.875 1.875-1.875h8.75C24.141 5.5 25 6.36 25 7.375v8.75C25 17.18 24.14 18 23.125 18h-8.75a1.85 1.85 0 0 1-1.875-1.875V13h1.25v3.125c0 .352.273.625.625.625h8.75a.64.64 0 0 0 .625-.625v-8.75c0-.312-.312-.625-.625-.625h-8.75a.64.64 0 0 0-.625.625V10.5h1.875c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H10v13.125a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V19.25h-2.5z' />
    </g>
    <defs>
      <clipPath id='a192af270bee6c1111ff32dfa3406268__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardLgRegularIcon);
export default ForwardRef;
