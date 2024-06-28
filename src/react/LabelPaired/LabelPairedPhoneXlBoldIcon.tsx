import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPhoneXlBoldIcon = (
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
      <path d='m17.578 18.938 5.25 2.25a1.84 1.84 0 0 1 1.125 2.109l-1.125 5.25c-.187.844-.984 1.5-1.828 1.5-.328 0-.61-.047-.89-.047-.47 0-.938-.047-1.36-.094C8.203 28.781 0 19.875 0 9c0-.844.61-1.64 1.453-1.828l5.25-1.125a1.84 1.84 0 0 1 2.11 1.125l2.25 5.25c.328.75.14 1.64-.516 2.156l-1.922 1.594a14.57 14.57 0 0 0 5.203 5.203l1.594-1.922c.515-.656 1.406-.844 2.156-.515m3.094 8.812.984-4.64-4.687-2.016-1.36 1.687a2.294 2.294 0 0 1-2.906.516 16.73 16.73 0 0 1-6-6 2.294 2.294 0 0 1 .516-2.906l1.687-1.36-2.015-4.687-4.641.984c.14 10.125 8.297 18.281 18.422 18.422' />
    </g>
    <defs>
      <clipPath id='ca381f2f118c7bb1db6bbdd3ab6b0517__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneXlBoldIcon);
export default ForwardRef;
