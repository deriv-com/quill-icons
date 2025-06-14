import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSterlingXlRegularIcon = (
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
      <path d='M22.5 18c0-3.75-2.016-7.172-5.25-9.047-3.281-1.922-7.266-1.922-10.5 0A10.36 10.36 0 0 0 1.5 18c0 3.797 1.969 7.219 5.25 9.094 3.234 1.922 7.219 1.922 10.5 0A10.48 10.48 0 0 0 22.5 18M0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36 0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18m12.14-5.25c-.937 0-1.687.797-1.687 1.734V16.5h2.297c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-2.297c-.047 1.078-.328 2.11-.844 3h5.766c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H8.25c-.281 0-.562-.14-.703-.375-.094-.234-.094-.562.047-.797l.468-.61A5.5 5.5 0 0 0 8.954 18H8.25a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h.703v-2.016c-.047-1.78 1.406-3.234 3.188-3.234.515 0 .984.14 1.453.375l.984.469a.77.77 0 0 1 .328 1.031.77.77 0 0 1-1.031.328l-.984-.515a1.9 1.9 0 0 0-.75-.141z' />
    </g>
    <defs>
      <clipPath id='cf8b9481af482ebdf1a3b5e353442526__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSterlingXlRegularIcon);
export default ForwardRef;
