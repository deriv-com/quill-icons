import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWifiXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.531 15.516c-.61.609-1.547.562-2.156-.047-.562-.563-.516-1.547.047-2.11C4.219 9.75 9.328 7.5 15 7.5c5.625 0 10.734 2.25 14.531 5.86.563.562.61 1.546.047 2.109-.61.61-1.547.656-2.156.047C24.187 12.422 19.828 10.5 15 10.5c-4.875 0-9.234 1.922-12.469 5.016M15 18c-2.672 0-5.11 1.031-6.984 2.625a1.487 1.487 0 0 1-2.11-.094c-.515-.656-.468-1.593.14-2.156C8.438 16.313 11.579 15 15 15s6.516 1.313 8.906 3.375c.61.563.703 1.5.14 2.156-.562.61-1.5.657-2.108.094C20.063 19.031 17.625 18 15 18m3 7.5c0 1.078-.61 2.063-1.5 2.625-.937.516-2.11.516-3 0A3.05 3.05 0 0 1 12 25.5c0-1.031.563-2.016 1.5-2.578.89-.516 2.063-.516 3 0 .89.562 1.5 1.547 1.5 2.578' />
    </g>
    <defs>
      <clipPath id='2f0e46464b09821cf05ec709a8953223__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWifiXlFillIcon);
export default ForwardRef;
