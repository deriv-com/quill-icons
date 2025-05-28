import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPhoneXlRegularIcon = (
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
      <path d='m17.578 18.938 5.25 2.25a1.84 1.84 0 0 1 1.125 2.109l-1.125 5.25c-.187.844-.937 1.5-1.828 1.5-.328 0-.61-.047-.89-.047-.188 0-.422 0-.61-.047C8.578 29.203 0 20.11 0 9c0-.844.61-1.64 1.453-1.828l5.25-1.125a1.84 1.84 0 0 1 2.11 1.125l2.25 5.25c.328.75.14 1.64-.516 2.156l-1.922 1.594a14.57 14.57 0 0 0 5.203 5.203l1.594-1.922c.515-.656 1.406-.844 2.156-.515m3.375 9.562c.188 0 .328-.094.375-.281l1.125-5.25c.047-.188-.047-.328-.187-.422l-5.25-2.25a.55.55 0 0 0-.47.094L15 22.313c-.469.562-1.266.703-1.922.328a15.2 15.2 0 0 1-5.719-5.72c-.375-.655-.234-1.452.329-1.921l1.921-1.547a.55.55 0 0 0 .094-.469l-2.25-5.25c-.094-.14-.234-.234-.422-.187l-5.25 1.125c-.187 0-.281.187-.281.328 0 10.781 8.719 19.5 19.453 19.5' />
    </g>
    <defs>
      <clipPath id='1765a1b190860569e1b18d0810bfaf6b__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneXlRegularIcon);
export default ForwardRef;
