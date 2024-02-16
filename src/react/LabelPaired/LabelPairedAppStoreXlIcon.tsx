import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAppStoreXlIcon = (
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
      <path d='m12 11.672-.422-.75q-.516-.703-1.312-.328-.704.516-.328 1.312l.937 1.688-3.094 5.39H5.344q-.89.094-.985.985.094.844.985.937h8.672q.327-.657 0-1.265-.329-.61-1.078-.657H9.984l4.079-7.078q.375-.797-.329-1.312-.796-.375-1.312.328zM8.297 21.89q-.75-.891-1.875-.563l-.703 1.219q-.375.797.375 1.265.796.375 1.312-.328zm7.922-2.907a6 6 0 0 1-.235-.422 335 335 0 0 0-2.578-4.453q-.469.375-.703 1.266-.187.937.375 1.969.562.984 1.36 2.39a255 255 0 0 1 2.156 3.75q.515.704 1.312.328.704-.469.375-1.312l-.937-1.594h1.36q.89-.094.983-.937-.093-.89-.984-.985zM12 6.375q3.235.047 5.86 1.594a11.6 11.6 0 0 1 4.171 4.172Q23.58 14.766 23.625 18q-.046 3.234-1.594 5.86a11.6 11.6 0 0 1-4.172 4.171Q15.234 29.58 12 29.625q-3.235-.046-5.86-1.594A11.6 11.6 0 0 1 1.97 23.86Q.422 21.234.375 18q.047-3.235 1.594-5.86A11.6 11.6 0 0 1 6.14 7.97Q8.766 6.42 12 6.375M22.125 18q-.094-4.313-2.953-7.172Q16.265 7.97 12 7.875q-4.313.094-7.172 2.953Q1.97 13.735 1.875 18q.094 4.313 2.953 7.172Q7.735 28.03 12 28.125q4.313-.094 7.172-2.953Q22.03 22.265 22.125 18' />
    </g>
    <defs>
      <clipPath id='6b4176046361942de05266de6d02df3c__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppStoreXlIcon);
export default ForwardRef;
