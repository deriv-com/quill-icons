import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightbulbXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.531 18.14c.75-1.124 1.219-2.437 1.219-3.89 0-3.703-3.047-6.75-6.75-6.75-3.75 0-6.75 3.047-6.75 6.75 0 1.453.422 2.766 1.172 3.89.187.235.422.563.656.891.61.797 1.266 1.735 1.781 2.672.422.75.657 1.547.75 2.344h-1.5c-.14-.563-.28-1.125-.562-1.64-.469-.844-1.031-1.641-1.64-2.438l-.704-.985C1.266 17.625.75 16.031.75 14.25A8.23 8.23 0 0 1 9 6c4.547 0 8.25 3.703 8.25 8.25 0 1.781-.562 3.375-1.5 4.734l-.703.985c-.61.797-1.172 1.593-1.64 2.437-.282.516-.423 1.032-.563 1.594h-1.5c.14-.75.328-1.547.75-2.297.515-.937 1.219-1.875 1.781-2.719a11 11 0 0 0 .656-.89zM9 10.5a3.73 3.73 0 0 0-3.75 3.75c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75C3.75 11.39 6.094 9 9 9c.375 0 .75.375.75.75 0 .422-.375.75-.75.75M6.844 27c.328.89 1.172 1.5 2.156 1.5.938 0 1.781-.61 2.11-1.5zm-1.594-.75v-.234c0-.282.188-.516.469-.516h6.515a.52.52 0 0 1 .516.516v.234C12.75 28.36 11.063 30 9 30c-2.11 0-3.75-1.64-3.75-3.75' />
    </g>
    <defs>
      <clipPath id='cbc572c649e61498dd549872ad31e2e6__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightbulbXlRegularIcon);
export default ForwardRef;
