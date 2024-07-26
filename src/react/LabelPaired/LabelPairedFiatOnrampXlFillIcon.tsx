import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiatOnrampXlFillIcon = (
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
      <path d='M22.734 11.016a.52.52 0 0 0-.515-.516H20.25v1.031h1.969a.52.52 0 0 0 .515-.515m0 1.968c0-.234-.234-.468-.515-.468H20.25v.984h1.969a.52.52 0 0 0 .515-.516m-12.047 4.829 4.079-4.079c-.141-.468-.188-.984-.188-1.5C14.578 8.813 17.344 6 20.766 6S27 8.813 27 12.234v13.782C27 28.219 25.172 30 22.969 30H9.187A6.18 6.18 0 0 1 3 23.813a6.18 6.18 0 0 1 6.188-6.188c.515 0 1.03.047 1.5.188m14.063-.797a6.25 6.25 0 0 1-3.984 1.406 6.15 6.15 0 0 1-4.97-2.531l-2.952 2.953a6.15 6.15 0 0 1 2.531 4.968c0 1.5-.516 2.907-1.406 3.938h9c.984 0 1.781-.797 1.781-1.734zm-4.5-8.532h-1.031v1.032h-.985v.984h.985v3h-.985v1.031h.985v.985h1.031v-.985h.984v.985h.985v-.985c.797 0 1.5-.656 1.5-1.5 0-.375-.14-.75-.422-1.031a1.487 1.487 0 0 0-.094-2.11c-.234-.234-.61-.374-.984-.374V8.484h-.985v1.032h-.984zM9.61 20.25H8.343v.563c-.797.234-1.313.984-1.313 1.828 0 1.078.844 1.968 1.922 1.968a.74.74 0 0 1 .75.75c0 .375-.328.703-.75.703a.72.72 0 0 1-.703-.703v-.187H7.031v.187c0 .844.516 1.594 1.313 1.828v.563h1.265v-.562c.797-.235 1.313-.985 1.313-1.829a1.98 1.98 0 0 0-1.969-1.968c-.375 0-.703-.328-.703-.75a.72.72 0 0 1 .703-.703c.422 0 .75.328.75.703v.187h1.219v-.187c0-.844-.516-1.594-1.313-1.828zm-2.344-8.766c0-.609.515-1.125 1.125-1.125h4.406c.469 0 .89.282 1.031.704.188.421.094.89-.234 1.218l-4.36 4.36c-.421.422-1.125.422-1.593 0-.422-.422-.422-1.172 0-1.594l2.437-2.438H8.391a1.11 1.11 0 0 1-1.125-1.125' />
    </g>
    <defs>
      <clipPath id='d12ca141b5a9c2323081050d6f719965__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiatOnrampXlFillIcon);
export default ForwardRef;
