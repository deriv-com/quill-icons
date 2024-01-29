import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGripDotsVerticalMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={24}
    viewBox='0 0 8 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 8a.97.97 0 0 1-.719-.281A.97.97 0 0 1 1 7q0-.437.281-.719A.97.97 0 0 1 2 6q.438 0 .719.281A.97.97 0 0 1 3 7a.97.97 0 0 1-.281.719A.97.97 0 0 1 2 8m0 5a.97.97 0 0 1-.719-.281A.97.97 0 0 1 1 12q0-.437.281-.719A.97.97 0 0 1 2 11q.438 0 .719.281A.97.97 0 0 1 3 12a.97.97 0 0 1-.281.719A.97.97 0 0 1 2 13m1 4a.97.97 0 0 1-.281.719A.97.97 0 0 1 2 18a.97.97 0 0 1-.719-.281A.97.97 0 0 1 1 17q0-.437.281-.719A.97.97 0 0 1 2 16q.438 0 .719.281A.97.97 0 0 1 3 17m3-9a.97.97 0 0 1-.719-.281A.97.97 0 0 1 5 7q0-.437.281-.719A.97.97 0 0 1 6 6q.437 0 .719.281A.97.97 0 0 1 7 7a.97.97 0 0 1-.281.719A.97.97 0 0 1 6 8m1 4a.97.97 0 0 1-.281.719A.97.97 0 0 1 6 13a.97.97 0 0 1-.719-.281A.97.97 0 0 1 5 12q0-.437.281-.719A.97.97 0 0 1 6 11q.437 0 .719.281A.97.97 0 0 1 7 12m-1 6a.97.97 0 0 1-.719-.281A.97.97 0 0 1 5 17q0-.437.281-.719A.97.97 0 0 1 6 16q.437 0 .719.281A.97.97 0 0 1 7 17a.97.97 0 0 1-.281.719A.97.97 0 0 1 6 18' />
    </g>
    <defs>
      <clipPath id='89f884311d21a59b297f99911e7500ba__a'>
        <path d='M0 0h8v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGripDotsVerticalMdBoldIcon);
export default ForwardRef;
