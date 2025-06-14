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
      <path d='M4.734 10.25H8.25c.398 0 .75-.328.75-.75V5a.77.77 0 0 0-.75-.75H1.5A.755.755 0 0 0 .75 5v4.5c0 .422.328.75.75.75h.75c.398 0 .75.352.75.75v.375l1.29-.96c.14-.095.28-.165.444-.165M8.25 11H4.734l-1.898 1.43c-.117.093-.258.093-.398.047a.39.39 0 0 1-.188-.352V11H1.5A1.48 1.48 0 0 1 0 9.5V5c0-.82.656-1.5 1.5-1.5h6.75c.82 0 1.5.68 1.5 1.5v4.5c0 .844-.68 1.5-1.5 1.5m-.75 3A1.48 1.48 0 0 1 6 12.5v-.75h.75v.75c0 .422.328.75.75.75h2.742a.74.74 0 0 1 .445.164l1.313.961V14c0-.398.328-.75.75-.75h.75c.398 0 .75-.328.75-.75V8a.77.77 0 0 0-.75-.75h-3V6.5h3c.82 0 1.5.68 1.5 1.5v4.5c0 .844-.68 1.5-1.5 1.5h-.75v1.125a.4.4 0 0 1-.21.352c-.142.046-.282.046-.4-.047L10.243 14zM4.313 5.164a.92.92 0 0 0-.868.586v.023c-.07.211.047.422.235.493.187.07.398-.047.468-.235l.024-.023c0-.07.07-.094.14-.094h.961c.165 0 .282.117.282.258 0 .117-.047.21-.14.258l-.727.422a.37.37 0 0 0-.188.328v.21c0 .212.164.376.375.376a.385.385 0 0 0 .375-.375l.54-.328a.97.97 0 0 0 .515-.868c0-.586-.47-1.03-1.032-1.03zm.562 4.219a.46.46 0 0 0 .469-.258.46.46 0 0 0 0-.54c-.094-.163-.282-.28-.469-.257a.51.51 0 0 0-.492.258.46.46 0 0 0 0 .539.47.47 0 0 0 .492.258' />
    </g>
    <defs>
      <clipPath id='4b55f752048200759fac31c9e84a2eb5__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessagesQuestionCaptionRegularIcon);
export default ForwardRef;
