import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessagesQuestionCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.758 10.25H8.25a.73.73 0 0 0 .54-.21A.73.73 0 0 0 9 9.5V5a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21H1.5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v4.5q0 .328.21.54.212.21.54.21h.75a.73.73 0 0 1 .54.21q.21.212.21.54v.375l1.313-.984a.72.72 0 0 1 .445-.141M8.25 11H4.758l-1.899 1.43a.4.4 0 0 1-.398.023.33.33 0 0 1-.211-.328V11H1.5a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 9.5V5q.024-.632.445-1.055Q.868 3.524 1.5 3.5h6.75q.633.024 1.055.445.421.423.445 1.055v4.5a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445m-.75 3a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 6 12.5v-.75h.75v.75q0 .328.21.54.212.21.54.21h2.742q.258 0 .469.14l1.289.985V14a.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21h.75a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54V8a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21h-3V6.5h3q.633.024 1.055.445.421.423.445 1.055v4.5a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-.75v1.125q0 .235-.21.328a.4.4 0 0 1-.4-.023L10.243 14zM4.313 5.14q-.61.048-.844.61v.023q-.094.329.21.47.353.093.493-.212v-.023q.047-.117.14-.117h.985q.234.023.258.28 0 .165-.14.235l-.727.422a.37.37 0 0 0-.188.328v.235q.023.327.375.375.352-.048.375-.375v-.024l.54-.304q.515-.305.515-.891 0-.446-.282-.727a1.13 1.13 0 0 0-.726-.304zm.562 4.243a.58.58 0 0 0 .492-.258.52.52 0 0 0 0-.562.58.58 0 0 0-.492-.258.58.58 0 0 0-.492.258.52.52 0 0 0 0 .562q.188.258.492.258' />
    </g>
    <defs>
      <clipPath id='c4f22668414b78e9c7161dd86fd765d2__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessagesQuestionCaptionRegularIcon);
export default ForwardRef;
