import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInfoXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={36}
    viewBox='0 0 9 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 9q0-.656.422-1.078Q3.843 7.5 4.5 7.5t1.078.422Q6 8.343 6 9t-.422 1.078q-.421.422-1.078.422-.656 0-1.078-.422Q3 9.657 3 9M.75 14.25q.047-.703.75-.75h3q.704.047.75.75V27h3q.703.046.75.75-.047.704-.75.75H.75q-.703-.046-.75-.75.047-.704.75-.75h3V15H1.5q-.703-.047-.75-.75' />
    </g>
    <defs>
      <clipPath id='649cd367c4f6d7ba3ceda53aa95067ed__a'>
        <path d='M0 0h9v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoXlRegularIcon);
export default ForwardRef;
