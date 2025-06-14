import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWhatsappXlIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M17.813 10.594C19.78 12.563 21 15.14 21 17.954c0 5.718-4.781 10.405-10.547 10.405-1.734 0-3.422-.468-4.969-1.265L0 28.5l1.453-5.39a10.4 10.4 0 0 1-1.406-5.204C.047 12.188 4.734 7.5 10.453 7.5a10.24 10.24 0 0 1 7.36 3.094m-7.36 15.984c4.781 0 8.766-3.89 8.766-8.625 0-2.344-.985-4.5-2.625-6.14A8.55 8.55 0 0 0 10.5 9.28c-4.781 0-8.672 3.89-8.672 8.625 0 1.64.469 3.235 1.313 4.64l.234.329-.89 3.188 3.28-.891.282.187c1.36.797 2.86 1.22 4.406 1.22m4.781-6.469c.235.141.422.188.47.328.093.094.093.61-.142 1.22-.234.609-1.265 1.171-1.734 1.218-.844.14-1.5.094-3.14-.656-2.626-1.125-4.313-3.75-4.454-3.89-.14-.188-1.03-1.407-1.03-2.72 0-1.265.655-1.875.89-2.156a.88.88 0 0 1 .703-.328h.469c.187 0 .375-.047.609.469.188.515.75 1.781.797 1.922.047.14.094.28 0 .468-.469.985-1.031.938-.75 1.407 1.031 1.734 2.016 2.343 3.562 3.093.235.141.375.094.563-.047.14-.187.656-.796.797-1.03.187-.282.375-.235.61-.141.233.093 1.5.703 1.78.843' />
    </g>
    <defs>
      <clipPath id='50ae92f4260d7df0df09fba1abfe7879__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWhatsappXlIcon);
export default ForwardRef;
