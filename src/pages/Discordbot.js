import mainImage from "../images/discordBot2.png"
import secondImage from "../images/discordBot2.png"

function Discordbot() {
  return (
    <div className='page article'>
      <h1>Discord bot</h1>
      <p>Here I will tell about simple discord bot I made using python.</p>
      <img src={mainImage} alt="discord bot" />
      <h2>Larw&#39;s Bot</h2>
      <p>I used youtube tutorial to make this bot.
      It doesn&#39;t have many features because I didn&#39;t have the motivation to continue it.</p>
      <p>When the bot is runing you can use it with couple of simple commands.
      First command you would wanna use is <em>help</em> to get list of all possible commands.
      Bot gives you this response:</p>
      <code><span class="hljs-symbol">Hei:</span>    tervehdys<br/>
      <span class="hljs-symbol">roll:</span>    nopan heitto<br/>
      <span class="hljs-symbol">credits:</span>    tekijä<br/>
      <span class="hljs-symbol">help:</span>    tämä<br/>
      </code>
      <p>I have to mention, that the bot doesn&#39;t care if you start with capitalized letter or not.
      Now that we know all the commands there is I&#39;m just going to list then here.</p>
      <p><strong>Hei</strong></p>
      <code>Hei siellä</code>
      <p><strong>roll</strong></p>
      <p>Gives random number between 1-6</p>
      <code>e.g. *5*</code>
      <p><strong>credits</strong></p>
      <blockquote>
      <p>Tämän botin on tehnyt <em>Larw</em></p>
      </blockquote>
      <p>There is all the commands but there is still one cool feature.
      Up to this point we have used these commands in some discord server but if we want we can get the response in private message.
      It work by putting exclamation mark at the beginig of the command. Like this <code>!roll</code>.
      Now the bot will send the response directly to you and not to the channel you used the command.</p>
      <img className="secondImage" src={secondImage} alt="private message from the bot"/>
      <h2 id="larw-s-bot">Some things from the code</h2>
      <p>Here is the function that returns the answer to send foward to the channel or user.</p>
      <code>
      def handle<span class="hljs-number">_</span>response(message) -&gt; str: <br/>
          p<span class="hljs-number">_m</span>essage = message.lower() <br/>
          <br/>
          <span class="hljs-keyword">if</span> p<span class="hljs-number">_m</span>essage == <span class="hljs-string">'hei'</span>: <br/>
              <span class="hljs-keyword">return</span> <span class="hljs-string">'Hei siellä!'</span> <br/>
          <br/>
          <span class="hljs-keyword">if</span> p<span class="hljs-number">_m</span>essage == <span class="hljs-string">'roll'</span>: <br/>
              <span class="hljs-keyword">return</span> str(random.randint(<span class="hljs-number">1</span>, <span class="hljs-number">6</span>)) <br/>
          <br/>
          <span class="hljs-keyword">if</span> p<span class="hljs-number">_m</span>essage == <span class="hljs-string">'help'</span>: <br/>
              <span class="hljs-keyword">return</span> <span class="hljs-string">"``<span class="hljs-subst">`Hei:\ttervehdys\nroll:\tnopan heitto\ncredits:\ttekijä\nhelp:\ttämä</span>```"</span> <br/>
          <br/>
          <span class="hljs-keyword">if</span> p<span class="hljs-number">_m</span>essage == <span class="hljs-string">'credits'</span>: <br/>
              <span class="hljs-keyword">return</span> <span class="hljs-string">"&gt;&gt;&gt; Tämän botin on tehnyt *Larw*"</span> <br/>
          <br/>
          <span class="hljs-keyword">else</span>: <br/>
              <span class="hljs-keyword">return</span> <span class="hljs-string">""</span> <br/>
      </code>
      <p>Here is the main code of the bot.</p>
      <code>
<span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">send_message</span><span class="hljs-params">(message, user_message, is_private)</span>:</span><br/>
    <span class="hljs-keyword">try</span>:<br/>
        response = responses.handle_response(user_message)<br/>
        <span class="hljs-keyword">if</span> is_private:<br/>
            <span class="hljs-keyword">await</span> message.author.send(response)<br/>
        <span class="hljs-keyword">else</span>:<br/>
            <span class="hljs-keyword">await</span> message.channel.send(response)<br/>
<br/>
    <span class="hljs-keyword">except</span> Exception <span class="hljs-keyword">as</span> e:<br/>
        print(e)<br/>
<br/>
<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">run_discord_bot</span><span class="hljs-params">()</span>:</span><br/>
    TOKEN = <span class="hljs-string">'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'</span><br/>
    intents = discord.Intents.default()<br/>
    intents.message_content = <span class="hljs-keyword">True</span><br/>
    client = discord.Client(intents=intents)<br/>
<br/>
<span class="hljs-meta">    @client.event</span><br/>
    <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">on_ready</span><span class="hljs-params">()</span>:</span><br/>
        print(f<span class="hljs-string">'{"client".user} is now running!'</span>)<br/>
<br/>
<span class="hljs-meta">    @client.event</span><br/>
    <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">on_message</span><span class="hljs-params">(message)</span>:</span><br/>
        <span class="hljs-keyword">if</span> message.author == client.user:<br/>
            <span class="hljs-keyword">return</span><br/>
<br/>
        username = str(message.author)<br/>
        user_message = str(message.content)<br/>
        channel = str(message.channel)<br/>
<br/>
        print(f<span class="hljs-string">"{"username"} said: '{"user_message"}' ({"channel"})"</span>)<br/>
<br/>
        <span class="hljs-keyword">if</span> user_message[<span class="hljs-number">0</span>] == <span class="hljs-string">'?'</span>:<br/>
            user_message = user_message[<span class="hljs-number">1</span>:]<br/>
            <span class="hljs-keyword">await</span> send_message(message, user_message, is_private=<span class="hljs-keyword">True</span>)<br/>
        <span class="hljs-keyword">else</span>:<br/>
            <span class="hljs-keyword">await</span> send_message(message, user_message, is_private=<span class="hljs-keyword">False</span>)<br/>
<br/>
    client.run(TOKEN)<br/>
</code>
<p>I may write more to this article. I also try to work on the styling of this page but it is challenging since I experimenting with Markdown to HTML converter. Especially thoes codeblocks are hard to get looking good.</p>
    </div>
  )
}

export default Discordbot