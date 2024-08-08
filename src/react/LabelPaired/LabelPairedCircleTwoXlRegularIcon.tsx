import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleTwoXlRegularIcon = (
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
      <path d='M12 7.5a10.48 10.48 0 0 0-9.094 5.25c-1.922 3.281-1.922 7.266 0 10.5C4.781 26.531 8.203 28.5 12 28.5c3.75 0 7.172-1.969 9.047-5.25 1.922-3.234 1.922-7.219 0-10.5C19.172 9.516 15.75 7.5 12 7.5M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30m-1.828-15.797-.703.61a.697.697 0 0 1-1.031-.047.697.697 0 0 1 .046-1.032l.657-.609c.703-.703 1.687-1.078 2.718-1.078 2.157 0 3.891 1.781 3.891 3.89a3.93 3.93 0 0 1-1.172 2.813l-3.797 3.75h4.969c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H9c-.328 0-.61-.187-.703-.422-.14-.281-.047-.61.14-.844l5.063-5.062c.469-.469.75-1.078.75-1.735a2.4 2.4 0 0 0-2.39-2.39c-.657 0-1.266.234-1.688.656' />
    </g>
    <defs>
      <clipPath id='731ba9f774553835bbb543edc4762f07__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTwoXlRegularIcon);
export default ForwardRef;
