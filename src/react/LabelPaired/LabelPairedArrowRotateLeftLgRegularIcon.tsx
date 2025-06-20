import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRotateLeftLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.875 13a.617.617 0 0 1-.625-.625v-5c0-.312.273-.625.625-.625.313 0 .625.313.625.625v3.633C4.023 8.468 6.797 6.75 10 6.75c4.805 0 8.75 3.945 8.75 8.75 0 4.844-3.945 8.75-8.75 8.75a8.75 8.75 0 0 1-7.422-4.062c-.273-.43.04-.938.547-.938.234 0 .43.156.547.352A7.56 7.56 0 0 0 10 23c4.14 0 7.5-3.36 7.5-7.5S14.14 8 10 8a7.52 7.52 0 0 0-6.523 3.75h3.398c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625z' />
    </g>
    <defs>
      <clipPath id='18d10fc4ba34b5dce6bdfd81e7edbd7b__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRotateLeftLgRegularIcon);
export default ForwardRef;
