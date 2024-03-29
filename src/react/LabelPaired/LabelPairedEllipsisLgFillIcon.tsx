import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.563 15.5c0-.781.39-1.484 1.093-1.875.664-.39 1.485-.39 2.188 0A2.18 2.18 0 0 1 4.938 15.5a2.2 2.2 0 0 1-1.094 1.914c-.703.39-1.524.39-2.188 0C.953 17.024.563 16.32.563 15.5m6.25 0c0-.781.39-1.484 1.093-1.875.664-.39 1.485-.39 2.188 0a2.18 2.18 0 0 1 1.094 1.875 2.2 2.2 0 0 1-1.094 1.914c-.703.39-1.524.39-2.188 0-.703-.39-1.093-1.094-1.093-1.914m8.437-2.187c.781 0 1.484.43 1.875 1.093.39.703.39 1.524 0 2.188a2.1 2.1 0 0 1-1.875 1.093c-.82 0-1.523-.39-1.914-1.093-.39-.664-.39-1.485 0-2.188a2.2 2.2 0 0 1 1.914-1.094' />
    </g>
    <defs>
      <clipPath id='fa0a36f8e199fc3e9cb11a12118d147d__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisLgFillIcon);
export default ForwardRef;
