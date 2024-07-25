import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const AccountsMt5StandardSuccessLightIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 48 48'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#0364B9'
      d='M31.5 7.95h-15a4.5 4.5 0 0 0-4.5 4.5v13.125h24V12.45a4.5 4.5 0 0 0-4.5-4.5'
    />
    <path
      fill='#0A559E'
      d='M16.5 7.95a4.5 4.5 0 0 0-4.5 4.5v.13l22.436-3.54A4.48 4.48 0 0 0 31.5 7.95zM36 12.45c0-1.128-.415-2.16-1.101-2.95l-2.947 16.075H36z'
    />
    <path fill='#2A3052' d='M12 25.2h24v2.25a4.5 4.5 0 0 1-4.5 4.5h-15a4.5 4.5 0 0 1-4.5-4.5z' />
    <path
      fill='#fff'
      d='M17.51 15.213q.16.297.368.738.216.432.442.945.232.504.459 1.035l.422.999.424-.999q.225-.531.45-1.035.234-.513.44-.945.217-.441.378-.738h1.279q.09.621.162 1.395.08.765.134 1.602.065.828.108 1.665.055.837.09 1.575H21.3q-.028-.909-.072-1.98a53 53 0 0 0-.136-2.16q-.161.378-.36.837l-.396.918a82 82 0 0 1-.675 1.593h-.98l-.306-.711-.378-.882a60 60 0 0 0-.387-.918q-.2-.459-.36-.837-.09 1.089-.136 2.16-.044 1.071-.072 1.98h-1.367q.035-.738.08-1.575l.109-1.665q.063-.837.135-1.602.08-.774.17-1.395zM28.019 15.213v1.197h-1.881v5.04h-1.404v-5.04h-1.881v-1.197zM30.991 19.614a.9.9 0 0 0-.117-.459q-.117-.207-.405-.342a2.9 2.9 0 0 0-.774-.207 9 9 0 0 0-1.224-.072q.099-.837.162-1.701t.1-1.62h3.374v1.125h-2.25a19 19 0 0 1-.045.63 9 9 0 0 1-.045.522q1.314.09 1.935.621.63.522.63 1.458 0 .432-.153.801a1.7 1.7 0 0 1-.459.639q-.306.27-.774.423a3.4 3.4 0 0 1-1.08.153q-.243 0-.513-.036a5 5 0 0 1-.513-.081 6 6 0 0 1-.44-.099 1.7 1.7 0 0 1-.307-.108l.243-1.107q.225.099.594.198.369.09.882.09.621 0 .9-.243.28-.252.28-.585M20.904 29.604q.149 0 .243-.023a.5.5 0 0 0 .157-.067.24.24 0 0 0 .081-.104.4.4 0 0 0 .023-.13q0-.153-.144-.252-.144-.105-.495-.22a4 4 0 0 1-.306-.122 1.2 1.2 0 0 1-.275-.176.9.9 0 0 1-.198-.256.8.8 0 0 1-.076-.37q0-.215.08-.386a.8.8 0 0 1 .23-.297q.15-.122.36-.185.212-.067.477-.067a1.94 1.94 0 0 1 .923.216l-.203.553a2 2 0 0 0-.292-.117 1.2 1.2 0 0 0-.383-.054q-.252 0-.364.072-.108.068-.108.212 0 .085.04.144a.4.4 0 0 0 .113.108q.076.045.17.085l.217.077q.243.09.423.18.18.085.297.202.12.117.18.275.058.157.058.382 0 .437-.306.68-.306.238-.922.238-.207 0-.374-.027a1.864 1.864 0 0 1-.518-.135 2 2 0 0 1-.152-.076l.198-.558q.14.075.342.14.207.058.504.058M24.898 27.02v.6h-.94v2.52h-.703v-2.52h-.94v-.6zM26.05 29.568l.113.009h.158q.526 0 .778-.266.257-.265.257-.733 0-.49-.243-.743-.243-.252-.77-.252a3 3 0 0 0-.148.005 1 1 0 0 0-.144.009zm2.03-.99q0 .405-.126.706a1.3 1.3 0 0 1-.36.5q-.23.197-.562.297a2.6 2.6 0 0 1-.747.099q-.189 0-.441-.018a3.4 3.4 0 0 1-.495-.063V27.06q.243-.045.504-.058.265-.018.454-.018.4 0 .725.09.328.09.562.283.234.194.36.495.126.302.126.725'
    />
    <path
      fill='#333'
      d='M9.92 46.047q-.736 0-1.248-.248a2.9 2.9 0 0 1-.872-.656l.8-.808q.568.64 1.4.64.448 0 .664-.184a.61.61 0 0 0 .216-.488.57.57 0 0 0-.128-.384q-.128-.16-.52-.216l-.552-.072q-.888-.113-1.304-.536-.408-.425-.408-1.128 0-.376.144-.688t.408-.536q.272-.225.656-.344.392-.129.888-.128.632 0 1.112.2t.824.584l-.808.816a1.6 1.6 0 0 0-.488-.376q-.28-.152-.712-.152-.408 0-.608.144a.47.47 0 0 0-.2.4q0 .288.152.416.16.127.512.184l.552.088q.864.136 1.28.536.416.391.416 1.12 0 .4-.144.736a1.56 1.56 0 0 1-.424.576q-.272.24-.68.376a3.1 3.1 0 0 1-.928.128M15.52 45.247h-.04a1.4 1.4 0 0 1-.152.304 1 1 0 0 1-.232.256q-.144.111-.344.176a1.4 1.4 0 0 1-.448.064q-.648 0-.984-.424-.327-.432-.328-1.232v-2.64h1.184v2.536q0 .384.136.592t.464.208a.96.96 0 0 0 .512-.152.6.6 0 0 0 .168-.192.5.5 0 0 0 .064-.264V41.75h1.184v4.2H15.52zM19.502 46.047q-.472 0-.84-.152a1.7 1.7 0 0 1-.616-.44 1.9 1.9 0 0 1-.376-.696 3 3 0 0 1-.128-.912q0-.505.128-.904.127-.408.376-.696a1.6 1.6 0 0 1 .616-.44q.368-.152.84-.152.64 0 1.064.288.432.288.616.808l-.96.416a.8.8 0 0 0-.232-.408q-.176-.168-.488-.168-.36 0-.544.24-.184.231-.184.632v.784q0 .4.184.632t.544.232q.32 0 .504-.168.192-.177.28-.456l.92.4q-.209.6-.648.88-.432.28-1.056.28M23.596 46.047q-.473 0-.84-.152a1.7 1.7 0 0 1-.616-.44 1.9 1.9 0 0 1-.376-.696 3 3 0 0 1-.128-.912q0-.505.128-.904.127-.408.376-.696a1.6 1.6 0 0 1 .616-.44q.367-.152.84-.152.638 0 1.064.288.432.288.616.808l-.96.416a.8.8 0 0 0-.232-.408q-.177-.168-.488-.168-.36 0-.544.24-.184.231-.184.632v.784q-.001.4.184.632.184.232.544.232.319 0 .504-.168.191-.177.28-.456l.92.4q-.21.6-.648.88-.432.28-1.056.28M27.745 46.047q-.48 0-.856-.152a1.9 1.9 0 0 1-.64-.44 2 2 0 0 1-.392-.696 3 3 0 0 1-.128-.912q0-.496.128-.896.129-.408.376-.696a1.7 1.7 0 0 1 .624-.44q.369-.16.84-.16.52 0 .888.176.377.175.608.472.24.295.344.688.112.384.112.808v.352h-2.696v.064q0 .415.224.664.224.24.704.24.369 0 .6-.144.233-.153.432-.36l.592.736q-.28.328-.736.512-.448.184-1.024.184m-.024-3.52q-.36 0-.568.24-.2.231-.2.624v.064h1.472v-.072q0-.385-.176-.616-.168-.24-.528-.24M31.91 46.047q-.609 0-1.024-.192a2.4 2.4 0 0 1-.744-.56l.695-.704q.224.248.497.392.27.144.616.144.351 0 .488-.104a.37.37 0 0 0 .136-.296q0-.297-.424-.352l-.456-.056q-1.416-.177-1.416-1.296 0-.304.112-.552.12-.256.328-.432.215-.184.512-.28.303-.104.68-.104.327 0 .576.048.255.04.448.128.2.08.36.208.167.12.328.272l-.68.696a1.5 1.5 0 0 0-.456-.312 1.2 1.2 0 0 0-.512-.12q-.304 0-.433.096a.3.3 0 0 0-.128.256q0 .168.088.264.096.087.352.128l.472.064q1.384.183 1.384 1.264 0 .304-.128.56-.128.255-.367.448a1.7 1.7 0 0 1-.569.288 2.4 2.4 0 0 1-.736.104M35.886 46.047q-.608 0-1.024-.192a2.4 2.4 0 0 1-.744-.56l.696-.704q.225.248.496.392.272.144.616.144.352 0 .488-.104a.37.37 0 0 0 .136-.296q0-.297-.424-.352l-.456-.056q-1.416-.177-1.416-1.296 0-.304.112-.552.12-.256.328-.432.216-.184.512-.28.305-.104.68-.104.328 0 .576.048.256.04.448.128.2.08.36.208.168.12.328.272l-.68.696a1.5 1.5 0 0 0-.456-.312 1.2 1.2 0 0 0-.512-.12q-.304 0-.432.096a.3.3 0 0 0-.128.256q0 .168.088.264.096.087.352.128l.472.064q1.384.183 1.384 1.264 0 .304-.128.56-.128.255-.368.448a1.7 1.7 0 0 1-.568.288 2.4 2.4 0 0 1-.736.104M38.981 44.19l-.376-2.271v-1.552h1.248v1.552l-.368 2.272zm.24 1.857q-.384 0-.552-.176a.62.62 0 0 1-.16-.432v-.192q0-.256.16-.432.168-.177.552-.176.385 0 .544.176a.6.6 0 0 1 .168.432v.192q0 .255-.168.432-.16.176-.544.176'
    />
    <path fill='#4BB4B3' d='M40 25.95a4 4 0 1 1-8 0 4 4 0 0 1 8 0' />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M37.573 24.524a.25.25 0 1 1 .354.354l-2.5 2.5a.25.25 0 0 1-.354 0l-1-1a.25.25 0 1 1 .354-.354l.823.823z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(AccountsMt5StandardSuccessLightIcon);
export default ForwardRef;