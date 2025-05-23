import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightFinancialAssessmentSuccessIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 96 90'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#84ABAE'
      d='M88.08 38.524 44.4 64.342.72 38.524v-.08c0-.16 2.48-2.165 6.16-5.212l.08-.08C19.04 23.37 44.4 3.245 44.4 3.245S69.84 23.37 81.84 33.152c3.76 3.047 6.24 5.132 6.24 5.372'
    />
    <path
      fill='#fff'
      d='M62.4 1.24H15.2c-4.08 0-7.28 3.288-7.28 7.297v52.117c0 4.01 3.28 7.296 7.28 7.296h59.12c4 0 7.28-3.287 7.28-7.376v-40.09z'
    />
    <path fill='#E3E4E3' d='M62.4 13.187c0 4.09 3.28 7.377 7.36 7.377h11.92L62.4 1.241z' />
    <path
      fill='#E0F0F0'
      d='M88.08 38.524V80.54c0 2.966-2.4 5.292-5.36 5.372H5.92c-2.96 0-5.28-2.406-5.28-5.372V38.524L44.4 64.342z'
    />
    <path
      fill='#C6E4E4'
      d='M86.64 84.227 58.48 56.004 44.4 64.342l-14.08-8.338L2.16 84.227A5.32 5.32 0 0 0 6 85.911h76.8c1.44 0 2.88-.642 3.84-1.684'
    />
    <path
      fill='#84ABAE'
      d='M22.56 24.573h40.56c2.64 0 4.8 2.165 4.8 4.81v4.49c0 2.647-2.16 4.812-4.8 4.812H22.56c-2.64 0-4.8-2.165-4.8-4.811v-4.49c0-2.646 2.16-4.811 4.8-4.811'
    />
    <path
      fill='#fff'
      d='m25.92 33.072.72-.722c.4.562 1.04.882 1.76.882.88 0 1.28-.4 1.28-1.042 0-.481-.24-.802-1.04-.962l-.56-.08c-1.28-.24-2-.882-2-1.925 0-1.202.96-1.924 2.32-1.924.88-.08 1.76.32 2.24 1.042l-.8.642c-.4-.481-.96-.802-1.6-.722-.8 0-1.2.321-1.2.882 0 .562.32.802 1.04.962l.56.16c1.36.241 1.92.883 1.92 1.925 0 1.283-.88 2.085-2.4 2.085-.8 0-1.68-.401-2.24-1.203m9.12.241c-.24.56-.8.962-1.44.962-1.04 0-1.6-.722-1.6-1.925v-3.207h1.04v3.047q0 1.203.96 1.203c.64 0 1.04-.24 1.04-.882v-3.288h1.04v4.972h-1.12v-.882zm2.16-1.684c0-1.604.8-2.646 2.24-2.646.88-.08 1.6.4 1.92 1.203l-.8.48c-.08-.48-.56-.801-1.04-.801-.8 0-1.2.561-1.2 1.283v.882c0 .802.4 1.283 1.2 1.283.56 0 1.04-.321 1.2-.802l.8.4c-.32.803-1.12 1.364-2 1.284-1.44.08-2.32-.963-2.32-2.566m4.88 0c0-1.604.8-2.646 2.24-2.646.88-.08 1.6.4 1.92 1.203l-.88.48c-.08-.48-.56-.801-1.04-.801-.8 0-1.2.561-1.2 1.283v.882c0 .802.4 1.283 1.2 1.283.56 0 1.04-.321 1.2-.802l.8.4c-.32.803-1.12 1.364-2 1.284-1.44.08-2.24-.963-2.24-2.566m4.8 0c0-1.604.88-2.646 2.32-2.646s2.24 1.122 2.24 2.485v.401H48v.16c-.08.642.48 1.284 1.12 1.284h.24c.56 0 1.04-.24 1.28-.722l.64.641c-.48.642-1.2 1.043-2 1.043-1.52 0-2.4-1.043-2.4-2.646m1.12-.481 2.32.08v-.08c.08-.642-.4-1.203-.96-1.203h-.16c-.64-.08-1.2.481-1.2 1.203m4.16 2.165.64-.642c.32.481.88.722 1.44.722.64 0 .88-.24.88-.642 0-.4-.16-.56-.72-.641l-.48-.08c-1.04-.16-1.6-.562-1.6-1.524s.72-1.523 1.84-1.523c.72-.08 1.44.24 1.84.802l-.64.641c-.32-.4-.8-.561-1.28-.561-.56 0-.8.24-.8.641s.24.562.8.642l.48.08c1.12.16 1.6.641 1.6 1.443 0 .962-.8 1.604-2 1.604-.72.08-1.52-.32-2-.962m4.64 0 .64-.642c.32.481.88.722 1.44.722.64 0 .88-.24.88-.642 0-.4-.16-.56-.72-.641l-.48-.08c-1.04-.16-1.6-.562-1.6-1.524s.8-1.523 1.84-1.523c.72-.08 1.36.24 1.84.802l-.64.641c-.32-.4-.72-.561-1.2-.561-.56 0-.88.24-.88.641s.24.562.8.642l.48.08c1.12.16 1.6.641 1.6 1.443 0 .962-.8 1.604-2 1.604-.72 0-1.52-.32-2-.962m-35.04-2.326h2.64v1h-2.64zm40.64 0h2.64v1H62.4z'
    />
    <path
      fill='#84ABAE'
      d='M77.6 90C87.762 90 96 81.744 96 71.559s-8.238-18.441-18.4-18.441-18.4 8.256-18.4 18.441S67.438 90 77.6 90'
    />
    <path
      fill='#fff'
      d='M76.32 77.492c-.16 0-.4-.08-.56-.16l-4.88-4.01c-.4-.24-.48-.801-.24-1.202s.8-.481 1.2-.24c.08.08.16.08.16.16l4.16 3.447 7.52-9.3c.32-.401.8-.401 1.2-.16.4.32.4.8.16 1.202l-8.08 9.942c-.16.16-.32.32-.56.32z'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivLightFinancialAssessmentSuccessIcon);
export default ForwardRef;
